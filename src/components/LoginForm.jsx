import { BiMailSend, BiKey } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="grid my-20 place-content-center">
      <div className="p-10 bg-white shadow-md card">
        <p className="mb-10 text-5xl font-bold text-center">Inicio de sesión</p>
        <div className="mb-5 form-control">
          <label className="label">
            <span className="text-lg font-semibold label-text">Email</span>
          </label>
          <label className="input-group">
            <span>
              <BiMailSend />
            </span>
            <input
              type="text"
              placeholder="correo@correo.com"
              className="w-full input input-bordered"
            />
          </label>
        </div>
        <div className="mb-10 form-control">
          <label className="label">
            <span className="text-lg font-semibold label-text">Contraseña</span>
          </label>
          <label className="input-group">
            <span>
              <BiKey />
            </span>
            <input
              type="text"
              placeholder="*****"
              className="w-full input input-bordered"
            />
          </label>
        </div>
        <button className="btn btn-success">Continuar</button>
        <div className="my-10 divider">¿No tienes una cuenta?</div>
        <Link to="/register" className="btn btn-outline">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
