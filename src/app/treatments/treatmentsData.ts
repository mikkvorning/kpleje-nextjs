export interface Treatment {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  link: string;
}

interface TreatmentsData {
  massage: Treatment[];
  wax: Treatment[];
}

export const treatmentsData: TreatmentsData = {
  massage: [
    {
      id: 'facial',
      title: 'Facial Massage',
      description:
        'Japanese Lift Massage includes techniques such as lymphatic drainage, acupressure, facial massage, and facial therapy. Stimulating acupressure points and facial zones. Cleansing the skin with vitamin C cleansing. Using a seaweed mask mixed with honey and vitamin C. Stimulating pressure points in the facial zone, massaging the neck and head. Techniques for tissue building and lymphatic drainage using a clear facial mask with moisturizing organic vitamins A, C, and E. Finishing with moisturizer and sunscreen.',
      duration: '45 min',
      price: '395 kr',
      image: '',
      link: '/treatments/massage/facial',
    },
    {
      id: 'guaSha',
      title: 'Gua Sha Massage',
      description:
        'We use only natural and organic materials to ensure a safe experience, whether you have sensitive skin, a swollen face, feel stressed, or just want to pamper yourself, we help you find the relief you desire. There may be some redness during the treatment due to increased blood flow. This means that tissue and skin are oxygenated and nourished. Helps the face look more beautiful and lively. Reduces clogged pores and acne. Relaxes facial muscles and relieves jaw tension. Increases and improves lymphatic drainage. Reduces fluid buildup under the eyes and in facial tissue. Promotes the formation of new skin cells and makes the skin firmer.',
      duration: '30 min',
      price: '250 kr',
      image: '',
      link: '/treatments/massage/gua-sha',
    },
    {
      id: 'aroma',
      title: 'Aroma Massage',
      description:
        'Considered a therapeutic massage. Whole body massage with fragrant and stimulating oils or creams. Aroma massage is a very relaxing and generally relaxing massage for both body and mind.',
      duration: '30/50 min',
      price: '250/450 kr',
      image: '',
      link: '/treatments/massage/aroma',
    },
    {
      id: 'foot',
      title: 'Luxury Foot Care (Foot Massage)',
      description:
        'The treatment starts with a warm softening spa foot bath with organic flower extracts, which softens the skin, as well as thyme and lavender which have a deep cleansing effect and give a feeling of well-being. Relaxing foot bath, then massaged with oil gently in the footplate, this oil is based on a mixture of kiwi extract and vitamin E. The treatment ends with a foot massage with softening cream, polishing of nails or clear varnish.',
      duration: '30 min',
      price: '250 kr',
      image: '',
      link: '/treatments/massage/foot',
    },
    {
      id: 'full',
      title: 'Full Body Massage',
      description:
        'A full body massage with oil or cream. Relaxing and stimulating.',
      duration: '50 min',
      price: '450 kr',
      image: '',
      link: '/treatments/massage/full-body',
    },
  ],
  wax: [
    {
      id: 'brazilian-full-legs',
      title: 'Brazilian Wax including Full Legs',
      description: 'Brazilian wax including full legs.',
      duration: '60 min',
      price: '659 kr',
      image: '',
      link: '/treatments/wax/brazilian-full-legs',
    },
    {
      id: 'brazilian-armpit',
      title: 'Brazilian Wax including Armpit',
      description: 'Brazilian wax including armpit..',
      duration: '60 min',
      price: '495 kr',
      image: '',
      link: '/treatments/wax/brazilian-armpit',
    },
    {
      id: 'full-legs',
      title: 'Full Legs Wax',
      description: 'Waxing for the full legs.',
      duration: '60 min',
      price: '469 kr',
      image: '',
      link: '/treatments/wax/full-legs',
    },
    {
      id: 'buttocks-thighs',
      title: 'Buttocks and Thighs Wax',
      description: 'Waxing for the buttocks and thighs.',
      duration: '60 min',
      price: '495 kr',
      image: '',
      link: '/treatments/wax/buttocks-thighs',
    },
    {
      id: 'full-legs-bikini',
      title: 'Full Legs including Bikini Line Wax',
      description: 'Waxing for the full legs including bikini line.',
      duration: '60 min',
      price: '595 kr',
      image: '',
      link: '/treatments/wax/full-legs-bikini',
    },
    {
      id: 'lower-legs-bikini',
      title: 'Lower Legs including Bikini Line Wax',
      description: 'Waxing for the lower legs including bikini line.',
      duration: '45 min',
      price: '465 kr',
      image: '',
      link: '/treatments/wax/lower-legs-bikini',
    },
    {
      id: 'lower-legs',
      title: 'Lower Legs Wax',
      description: 'Waxing for the lower legs.',
      duration: '45 min',
      price: '369 kr',
      image: '',
      link: '/treatments/wax/lower-legs',
    },
    {
      id: 'back',
      title: 'Back Wax',
      description: 'Waxing for the back area.',
      duration: '45 min',
      price: '369 kr',
      image: '',
      link: '/treatments/wax/back',
    },
    {
      id: 'brazilian',
      title: 'Brazilian Wax',
      description: 'Brazilian wax.',
      duration: '45 min',
      price: '350 kr',
      image: '',
      link: '/treatments/wax/brazilian',
    },
    {
      id: 'bikini-line',
      title: 'Bikini Line Wax',
      description: 'Waxing for the bikini line.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/bikini-line',
    },
    {
      id: 'armpit',
      title: 'Armpit Wax',
      description: 'Waxing for the armpit area.',
      duration: '30 min',
      price: '159 kr',
      image: '',
      link: '/treatments/wax/armpit',
    },
    {
      id: 'upper-lip-chin',
      title: 'Upper Lip and Chin Wax',
      description: 'Waxing for the upper lip and chin.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/upper-lip-chin',
    },
    {
      id: 'upper-lip-eyebrow',
      title: 'Upper Lip and Eyebrow Wax',
      description: 'Waxing for the upper lip and eyebrow.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/upper-lip-eyebrow',
    },
    {
      id: 'full-stomach',
      title: 'Full Stomach Wax',
      description: 'Waxing for the full stomach.',
      duration: '20 min',
      price: '159 kr',
      image: '',
      link: '/treatments/wax/full-stomach',
    },
    {
      id: 'nose',
      title: 'Nose Wax',
      description: 'Waxing for the nose.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/nose',
    },
    {
      id: 'upper-lip',
      title: 'Upper Lip Wax',
      description: 'Waxing for the upper lip.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/upper-lip',
    },
    {
      id: 'chin',
      title: 'Chin Wax',
      description: 'Waxing for the chin.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/chin',
    },
    {
      id: 'sideburns',
      title: 'Sideburns Wax',
      description: 'Waxing for the sideburns.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/sideburns',
    },
    {
      id: 'eyebrow',
      title: 'Eyebrow Wax',
      description: 'Waxing for the eyebrow.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/eyebrow',
    },
  ],
};
