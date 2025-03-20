import "./Login.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUpSchema } from "../../../utils/Schemas/LoginSchema";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginUpSchema),
  });

  const handleSignUpForm = (data) => {
    console.log(data.email);
  };

  return (
    <div className="w-screen min-h-screen  flex flex-col md:flex-row bg-white">
      <div className="bg-blue-500 flex justify-center items-center text-white md:w-1/2 font-">
        <div className="flex flex-col justify-center items-center">
          <p className="text-8xl">IBM</p>
          <img src="/images/house.png" alt="" className="w-20 h-20 my-3" />
        </div>
      </div>

      <div className="flex flex-col items-center  md:w-1/2">
        <div className="text-4xl mt-10 mb-10 md:mt-20 md:mb-20 lg:mb-4 font-bold font-sans">
          Login
        </div>

        <form onSubmit={handleSubmit(handleSignUpForm)} className="w-2/3">
          <div className="flex flex-col">
            <p className="text-2xl mt-2">Email</p>

            <input
              {...register("email")}
              className="bg-white px-2 py-2  border border-black rounded-md"
            />
            {errors.email && (
              <label className="text-red-500">{errors.email.message}</label>
            )}
          </div>

          <div className="flex flex-col mt-6">
            <p className="text-2xl mt-2">Senha</p>
            <input
              {...register("pass")}
              className="bg-white px-2 py-2 xl:py-4 border border-black rounded-md  "
            />
            {errors.pass && (
              <p className=" text-red-500">{errors.pass.message}</p>
            )}
          </div>

          <div className="flex flex-col items-center mt-4">
            <p className="text-center text-sm mt-3">
              Esqueceu a senha ? <a href="">Clique Aqui</a>
            </p>

            <input
              type="submit"
              value={"Entrar"}
              className="w-48 sm:w-64 lg:w-80 p-8 border-1 text-white border-blue-500 bg-blue-500 py-2 rounded-sm"
            />

            <p className="text-center text-sm mt-3 mb-4">
              Não tem cadastro ? <a href="">Clique Aqui</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
