  export const validationRules = {
    sector: {
      required: {
        value: true,
        message: 'This field is required'
      }
    },
    monthlyIncome: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    },
    experienceYears: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    },
    experienceMonths: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    },
    region: {
      required: {
        value: true,
        message: 'This field is required'
      }
    },
    businessAddress: {
      required: {
        value: true,
        message: 'This field is required'
      }
    },
    currency: {
      required: {
        value: true,
        message: 'This field is required'
      }
    },
    purpose: {
      required: {
        value: true,
        message: 'This field is required'
      }
    },
    amount: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    },
    duration: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    },
    percent: {
      required: {
        value: true,
        message: 'This field is required'
      },
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: 'This field must contain only positive numbers'
      }
    }
  };