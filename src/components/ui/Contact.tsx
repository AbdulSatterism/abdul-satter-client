"use client";

import { motion } from "framer-motion";
import { useSentMailMutation } from "@/redux/features/developer/DeveloperApi";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sendEmail, { isLoading }] = useSentMailMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const toastId = toast.loading("Sending .....");
    const mailInfo = {
      ...data,
    };

    try {
      const res = await sendEmail(mailInfo).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
        reset();
      }
    } catch (err: any) {
      toast.error("something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-12   bg-[#01051b] rounded-lg shadow-lg shadow-blue-700"
    >
      <h2 className="text-3xl font-bold mb-6 text-center uppercase text-blue-600">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-blue-950 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
