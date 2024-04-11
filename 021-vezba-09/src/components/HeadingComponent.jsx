// icons
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci';

function HeadingComponent() {
  return (
    <div className="container mx-auto flex-center justify-between h-[90px]">
      <h3>Need help? Call us: (+98) 0234 456 789</h3>
      <div>
        <ul className="flex-center gap-5">
          <li className="flex-center gap-2">
            <CiLocationOn color="black" size={25} />
            <span>Our store</span>
          </li>
          <li className="flex-center gap-2">
            <CiDeliveryTruck color="black" size={25} />
            <span>Track your order</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadingComponent;
