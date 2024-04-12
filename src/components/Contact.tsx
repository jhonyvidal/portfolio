import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useForm } from "react-hook-form";
import { postCustomer } from "../service/modules/customer/customers";
import "../i18n/config";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [responseSuccess, setResponseSuccess] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<boolean>(false);
  const [isloading, setIsloading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsloading(true);
    const { name, phone, email, message } = getValues();
    console.log(phone);
    event.preventDefault();
    const responseData = await postCustomer({
      nombre: name,
      telefono: phone,
      correo: email,
      negocio: message,
    });

    if (responseData.status === 201) {
      setIsloading(false);
      setResponseSuccess(true);
    } else {
      setIsloading(false);
      setResponseError(true);
      setTimeout(() => {
        setResponseError(false);
      }, 3000);
    }
    reset();
  };

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                {t("contact.title")}
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                <p
                  dangerouslySetInnerHTML={{ __html: t("contact.subtitle") }}
                />
              </h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6
            pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              required
              className="bg-transparent border-b py-3 outline-none 
            w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder={t("contact.form.name")}
              {...register("name", { required: true })}
            />
            <input
              required
              className="bg-transparent border-b py-3 outline-none 
            w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder={t("contact.form.email")}
              {...register("email", { required: true })}
            />
            <textarea
              required
              className="bg-transparent border-b py-3 outline-none 
                w-full placeholder:text-white focus:border-accent transition-all
                resize-none mb-12"
              placeholder={t("contact.form.message")}
              {...register("message", { required: true })}
            ></textarea>
            <button type="submit" className="btn btn-lg">
              {t("sendmessage")}
            </button>
            {responseSuccess && (
              <span className="text-header-gradient">
                Tus datos, fueron recibidos exitosamente a tu correo enviamos
                link de confirmación.
              </span>
            )}
            {responseError && (
              <span className="text-header-red ">An error has happend</span>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
