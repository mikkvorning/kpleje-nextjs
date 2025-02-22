import { treatmentsData } from '../../treatmentsData';
import TreatmentPage from '@/app/components/TreatmentPage';

const GuaSha = () => (
  <TreatmentPage {...treatmentsData.massage.find((t) => t.id === 'guaSha')!} />
);

export default GuaSha;
