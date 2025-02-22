import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const FullBody = () => (
  <TreatmentPage {...treatmentsData.massage.find((t) => t.id === 'full')!} />
);

export default FullBody;
