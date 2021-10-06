import later from '@breejs/later';

export const initialState = {
  text: '',
  count: 1,
  error: -1,
  occurrences: [] as Date[],
};

type ChangeTextAction = {
  type: 'changeText';
  payload: string;
};

type ChangeCountAction = {
  type: 'changeCount';
  payload: number;
};

type Action = ChangeTextAction | ChangeCountAction;

const calculate = ({ text, count }: { text: string; count: number }) => {
  const scheduleData = later.parse.text(text);
  const occurrences = later.schedule(scheduleData).next(count);
  return {
    error: scheduleData.error,
    occurrences:
      occurrences instanceof Date
        ? [occurrences]
        : occurrences
        ? occurrences
        : [],
  };
};

export const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'changeText':
      const changeTextResult = calculate({
        text: action.payload,
        count: state.count,
      });
      return {
        ...state,
        text: action.payload,
        error: changeTextResult.error,
        occurrences: changeTextResult.occurrences,
      };
    case 'changeCount':
      const changeCountResult = calculate({
        text: state.text,
        count: action.payload,
      });
      return {
        ...state,
        count: action.payload,
        error: changeCountResult.error,
        occurrences: changeCountResult.occurrences,
      };
    default:
      return { ...state };
  }
};
