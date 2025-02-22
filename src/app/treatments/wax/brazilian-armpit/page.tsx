import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const BrazillianArmpit: React.FC = () => (
  <TreatmentPage
    {...treatmentsData.wax.find((t) => t.id === 'brazillianArmpit')!}
  />
);

export default BrazillianArmpit;
