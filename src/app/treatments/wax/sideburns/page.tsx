import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Sideburns = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'sideburns')!} />
);

export default Sideburns;
