import React from "react";
import { contact, contactContent, social } from "../../Utils/constant/Content";
import { useForm } from "react-hook-form";
import CustomButton from "../../Utils/constant/Button/CustomButton";
import SocialLink from "../../Utils/constant/SocialLinks/SocialLink";
import "./Contact.css";

const Contact = () => {
  const { heading, para1, para2, para3, para4, ImagePath } = contactContent;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="container "
    >
      <div className="row">
        <div className="col-md-12">
          <div className="ContactMain">
            <h1>{heading}</h1>
            <div className="contactInfo ">
              {contact.map((value, index) => {
                const { name, content, boxshadow } = value;

                return (
                  <div
                    key={index}
                    style={{ boxShadow: boxshadow }}
                    className="info "
                  >
                    <h5 className="text">{name}</h5>
                    <p className="text gray">{content}</p>
                  </div>
                );
              })}
            </div>

            <div className="inputContent">
              <p>
                {para1}
                <span>{para2}</span>
                {para3}
                <span>{para4}</span>
              </p>

              <div className="links">
                <SocialLink items={social} />
              </div>

              <div className="InputFields">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    className="messsage"
                    type="text"
                    placeholder="Message"
                    {...register("Message", {
                      required: true,
                    })}
                  />

                  <div className="contactBtn">
                    <CustomButton title="Submit" />
                  </div>
                </form>

                <div className="ContactImage">
                  <img src={ImagePath} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
