"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import showMessage from "@/app/components/js/showError";

import Spinner from "@/app/components/js/spinner/Spinner";

export default function Body() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    function handle() {
      if (name && email && tel && body && subject) {
        if (email.includes("@") && email.includes(".")) {
          setDisable(false);
        } else {
          setDisable(true);
        }
      } else {
        setDisable(true);
      }
    }
    handle();
  }, [name, email, tel, body, subject]);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const handleIt = async () => {
      setDisable(true);

      try {
        if (name && email && tel && body && subject) {
          if (email.includes("@") && email.includes(".")) {
            setError("sending...");
          } else {
            setDisable(true);
            setError("Invalid email address");
            setInterval(() => {
              setError("");
            }, 4000);
            return;
          }

          setTimeout(() => {
            showMessage(
              setError,
              `Thank you  ${name}, we will get back to you as soon as possible`
            );
          }, 1500);
        } else {
          setDisable(true);
          setError("All fields are required");
          setInterval(() => {
            setError("");
          }, 4000);
        }
      } catch (err) {
        setDisable(false);
        showMessage(setError, "Some error occured");
      }
    };
    handleIt();
  };
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <h1>Send Us A Message</h1>
      </div>
      <p>We are here to help!</p>
      <form>
        <input
          required
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          value={name}
          autoComplete="true"
          placeholder="Name"
        />

        <input
          required
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          value={email}
          autoComplete="true"
          placeholder="someone@gmail.com"
        />
        <input
          required
          type="text"
          onChange={(e) => {
            setTel(e.target.value);
          }}
          name="tel"
          value={tel}
          autoComplete="true"
          placeholder="Phone Number"
        />
        <textarea
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          value={subject}
          placeholder="Subject"
        />
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
          placeholder="Your message here"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={disable}
          className={disable ? styles.disable : styles.enable}
        >
          Send Message
        </button>
      </form>
      {error && <Spinner error={error} />}
    </div>
  );
}
