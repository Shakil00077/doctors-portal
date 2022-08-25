import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-contain bg-center bg-no-repeat">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="dentist-chair"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-info">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected: </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
