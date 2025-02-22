import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const ButtocksThighs = () => (
  <TreatmentPage
    {...treatmentsData.wax.find((t) => t.id === 'buttocks-thighs')!}
  />
);

export default ButtocksThighs;
