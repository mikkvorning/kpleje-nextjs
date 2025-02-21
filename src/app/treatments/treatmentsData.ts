export interface Treatment {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  link: string;
}

interface TreatmentsData {
  massage: {
    facial: Treatment;
    guaSha: Treatment;
    aroma: Treatment;
    foot: Treatment;
  };
  wax: {
    brazilianFullLegs: Treatment;
    brazilianArmhole: Treatment;
    fullLegs: Treatment;
    buttocksThighs: Treatment;
    fullLegsBikini: Treatment;
    lowerLegsBikini: Treatment;
    lowerLegs: Treatment;
    back: Treatment;
    brazilian: Treatment;
    bikiniLine: Treatment;
    armhole: Treatment;
    upperLipChin: Treatment;
    upperLipEyebrow: Treatment;
    fullStomach: Treatment;
    nose: Treatment;
    upperLip: Treatment;
    chin: Treatment;
    sideburns: Treatment;
    eyebrow: Treatment;
  };
}

export const treatmentsData: TreatmentsData = {
  massage: {
    facial: {
      title: 'Facial Massage',
      description:
        'Japanese Lift Massage includes techniques such as lymphatic drainage, acupressure, facial massage, and facial therapy. Stimulating acupressure points and facial zones. Cleansing the skin with vitamin C cleansing. Using a seaweed mask mixed with honey and vitamin C. Stimulating pressure points in the facial zone, massaging the neck and head. Techniques for tissue building and lymphatic drainage using a clear facial mask with moisturizing organic vitamins A, C, and E. Finishing with moisturizer and sunscreen.',
      duration: '45 min',
      price: '395 kr',
      image: '',
      link: '/treatments/massage/facial',
    },
    guaSha: {
      title: 'Gua Sha Massage',
      description:
        'We use only natural and organic materials to ensure a safe experience, whether you have sensitive skin, a swollen face, feel stressed, or just want to pamper yourself, we help you find the relief you desire. There may be some redness during the treatment due to increased blood flow. This means that tissue and skin are oxygenated and nourished. Helps the face look more beautiful and lively. Reduces clogged pores and acne. Relaxes facial muscles and relieves jaw tension. Increases and improves lymphatic drainage. Reduces fluid buildup under the eyes and in facial tissue. Promotes the formation of new skin cells and makes the skin firmer.',
      duration: '30 min',
      price: '250 kr',
      image: '',
      link: '/treatments/massage/guaSha',
    },
    aroma: {
      title: 'Aroma Massage',
      description:
        'Considered a therapeutic massage. Whole body massage with fragrant and stimulating oils or creams. Aroma massage is a very relaxing and generally relaxing massage for both body and mind.',
      duration: '30/50 min',
      price: '250/450 kr',
      image: '',
      link: '/treatments/massage/aroma',
    },
    foot: {
      title: 'Luxury Foot Care (Foot Massage)',
      description:
        'The treatment starts with a warm softening spa foot bath with organic flower extracts, which softens the skin, as well as thyme and lavender which have a deep cleansing effect and give a feeling of well-being. Relaxing foot bath, then massaged with oil gently in the footplate, this oil is based on a mixture of kiwi extract and vitamin E. The treatment ends with a foot massage with softening cream, polishing of nails or clear varnish.',
      duration: '30 min',
      price: '250 kr',
      image: '',
      link: '/treatments/massage/foot',
    },
  },
  wax: {
    brazilianFullLegs: {
      title: 'Brazilian Wax including Full Legs',
      description: 'Brazilian wax including full legs.',
      duration: '60 min',
      price: '659 kr',
      image: '',
      link: '/treatments/wax/brazilian-full-legs',
    },
    brazilianArmhole: {
      title: 'Brazilian Wax including Armhole',
      description: 'Brazilian wax including armhole.',
      duration: '60 min',
      price: '495 kr',
      image: '',
      link: '/treatments/wax/brazilian-armhole',
    },
    fullLegs: {
      title: 'Full Legs Wax',
      description: 'Waxing for the full legs.',
      duration: '60 min',
      price: '469 kr',
      image: '',
      link: '/treatments/wax/full-legs',
    },
    buttocksThighs: {
      title: 'Buttocks and Thighs Wax',
      description: 'Waxing for the buttocks and thighs.',
      duration: '60 min',
      price: '495 kr',
      image: '',
      link: '/treatments/wax/buttocks-thighs',
    },
    fullLegsBikini: {
      title: 'Full Legs including Bikini Line Wax',
      description: 'Waxing for the full legs including bikini line.',
      duration: '60 min',
      price: '595 kr',
      image: '',
      link: '/treatments/wax/full-legs-bikini',
    },
    lowerLegsBikini: {
      title: 'Lower Legs including Bikini Line Wax',
      description: 'Waxing for the lower legs including bikini line.',
      duration: '45 min',
      price: '465 kr',
      image: '',
      link: '/treatments/wax/lower-legs-bikini',
    },
    lowerLegs: {
      title: 'Lower Legs Wax',
      description: 'Waxing for the lower legs.',
      duration: '45 min',
      price: '369 kr',
      image: '',
      link: '/treatments/wax/lower-legs',
    },
    back: {
      title: 'Back Wax',
      description: 'Waxing for the back area.',
      duration: '45 min',
      price: '369 kr',
      image: '',
      link: '/treatments/wax/back',
    },
    brazilian: {
      title: 'Brazilian Wax',
      description: 'Brazilian wax.',
      duration: '45 min',
      price: '350 kr',
      image: '',
      link: '/treatments/wax/brazilian',
    },
    bikiniLine: {
      title: 'Bikini Line Wax',
      description: 'Waxing for the bikini line.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/bikini-line',
    },
    armhole: {
      title: 'Armhole Wax',
      description: 'Waxing for the armhole area.',
      duration: '30 min',
      price: '159 kr',
      image: '',
      link: '/treatments/wax/armhole',
    },
    upperLipChin: {
      title: 'Upper Lip and Chin Wax',
      description: 'Waxing for the upper lip and chin.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/upper-lip-chin',
    },
    upperLipEyebrow: {
      title: 'Upper Lip and Eyebrow Wax',
      description: 'Waxing for the upper lip and eyebrow.',
      duration: '30 min',
      price: '169 kr',
      image: '',
      link: '/treatments/wax/upper-lip-eyebrow',
    },
    fullStomach: {
      title: 'Full Stomach Wax',
      description: 'Waxing for the full stomach.',
      duration: '20 min',
      price: '159 kr',
      image: '',
      link: '/treatments/wax/full-stomach',
    },
    nose: {
      title: 'Nose Wax',
      description: 'Waxing for the nose.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/nose',
    },
    upperLip: {
      title: 'Upper Lip Wax',
      description: 'Waxing for the upper lip.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/upper-lip',
    },
    chin: {
      title: 'Chin Wax',
      description: 'Waxing for the chin.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/chin',
    },
    sideburns: {
      title: 'Sideburns Wax',
      description: 'Waxing for the sideburns.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/sideburns',
    },
    eyebrow: {
      title: 'Eyebrow Wax',
      description: 'Waxing for the eyebrow.',
      duration: '20 min',
      price: '90 kr',
      image: '',
      link: '/treatments/wax/eyebrow',
    },
  },
};
