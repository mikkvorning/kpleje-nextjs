import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Armpit = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'armpit')!} />
);

export default Armpit;
