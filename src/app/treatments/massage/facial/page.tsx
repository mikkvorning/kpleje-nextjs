import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Facial = () => (
  <TreatmentPage {...treatmentsData.massage.find((t) => t.id === 'facial')!} />
);

export default Facial;
