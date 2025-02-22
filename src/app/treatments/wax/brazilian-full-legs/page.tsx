import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const BrazilianFullLegs = () => (
  <TreatmentPage
    {...treatmentsData.wax.find((t) => t.id === 'brazilian-full-legs')!}
  />
);

export default BrazilianFullLegs;
