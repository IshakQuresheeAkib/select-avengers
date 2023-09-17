import PropTypes from "prop-types";


const Card = ({actor,handleSelect}) => {

    const {name,age,role,image,salary} = actor;


    return (
        <div className="card card-body text-center bg-slate-100 shadow-md">
            <img src={image} alt="" className="mx-auto w-24 h-24 rounded-full"/>
            <h3 className="font-bold text-2xl ">{name}</h3>                
            <p className="font-semibold">{role}</p>
            <p className="text-sm">Age: {age} year</p>
            <p className="text-sm">Salary: ${salary}</p>
            <button onClick={()=> handleSelect(actor)} className="btn bg-emerald-300 text-white w-20 text-sm normal-case mx-auto btn-sm mt-7">Select</button>
        </div>
    );
};

export default Card;

Card.propTypes = {
    actor: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
  };