import React, { useCallback, useState } from "react";
import "../style.css"
const MyForm: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = useCallback((email: string): boolean => {
    return (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
    );
  },[])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      showAlertBox("Missed one", "Please fill all the input boxes!!!");
      return;
    }

    if (!validateEmail(email)) {
      showAlertBox("Incorrect Format", "Please Check you email ID");
      return;
    }

    setIsLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      // Sent the data to google sheets
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Successful submission
        showAlertBox("Success", "Form submitted successfully.");
        setIsLoading(false);
        form.reset();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Error in submission
        showAlertBox("Error", "Form submission failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      // Error in submission
      console.log(error);
      showAlertBox("Error", "Form submission failed. Please try again.");
      setIsLoading(false);
    }
  };

  // Submission Success show form.
  const showAlertBox = useCallback((title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setShowAlert(true);
  },[])
  //
  const hideAlertBox = useCallback(() => {
    setShowAlert(false);
  },[])

  return (
    <div className="relative z-0">
      {showAlert && (
        <div className="alert-box absolute inset-0 flex items-center justify-center">
          <div className="bg-white border border-gray-300 rounded-md p-4 text-black ">
            <h3 className="text-xl font-semibold mb-2">{alertTitle}</h3>
            <p>{alertMessage}</p>
            <div className="text-right">
              <button className="button-style mt-5 " onClick={hideAlertBox}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="alert-box absolute inset-0 flex items-center justify-center">
          <div className="lds-ring">
           
          
          </div>
        </div>
      )}

      <form
        id="gform"
        // bg-slate-700
        className="lg:w-2/4 border border-gray-300 shadow-sm  mx-auto mt-5 px-5 lg:px-16 rounded"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbxSneugaxgUUhKO0ZKqekwqJCT0l3-h-jtDmjpb1PlKSbWEHacb-Nxw4sOelgSMNYSi/exec"
        onSubmit={handleSubmit}
      >
        <p className="pt-10 pb-1">Name</p>
        <input
        
          type="text"
          name="name"
          placeholder="Eg. John Abraham"
          className="input-text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="pt-10 pb-1">Email</p>
        <input
          type="email"
          name="email"
          placeholder="Eg. johnabraham@gmail.com"
          className="input-text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="pt-10 pb-1">Message</p>
        <textarea
          name="message"
          placeholder="Enter your Message"
          className="input-text h-56"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="text-right hover:scale-105 transition-transform duration-300 ease-in-out">
          <input type="submit" value="Submit" className="button-style my-5" />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
