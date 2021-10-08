import mockConsole from 'jest-mock-console';

import { initialState, reducer } from '../later';

describe('later', () => {
  describe('reducer', () => {
    const expectArrayOfDate = (array: any) => {
      expect(array).toBeInstanceOf(Array);
      array.forEach((element: any) => {
        expect(element).toBeInstanceOf(Date);
      });
    };
    describe('action is changeText', () => {
      describe('no error', () => {
        describe('count eq 1', () => {
          it('sets state', () => {
            const { text, count, occurrences, error } = reducer(initialState, {
              type: 'changeText',
              payload: 'every weekend',
            });
            expect(text).toEqual('every weekend');
            expect(count).toEqual(1);
            expect(error).toEqual(-1);
            expect(occurrences).toHaveLength(1);
            expectArrayOfDate(occurrences);
          });
        });
        describe('count lt 1', () => {
          it('sets state', () => {
            const { text, count, occurrences, error } = reducer(
              {
                ...initialState,
                count: 2,
              },
              {
                type: 'changeText',
                payload: 'every weekend',
              }
            );
            expect(text).toEqual('every weekend');
            expect(count).toEqual(2);
            expect(error).toEqual(-1);
            expect(occurrences).toHaveLength(2);
            expectArrayOfDate(occurrences);
          });
        });
      });
      describe('error', () => {
        it('sets state', () => {
          const { text, count, occurrences, error } = reducer(initialState, {
            type: 'changeText',
            payload: 'error',
          });
          expect(text).toEqual('error');
          expect(count).toEqual(1);
          expect(error).toEqual(0);
          expect(occurrences).toHaveLength(0);
        });
      });
      describe('later throws', () => {
        it('sets state', () => {
          mockConsole();
          const { text, count, occurrences, error } = reducer(initialState, {
            type: 'changeText',
            payload: 'every between the 1 and 7',
          });
          expect(text).toEqual('every between the 1 and 7');
          expect(count).toEqual(1);
          expect(error).toEqual(0);
          expect(occurrences).toHaveLength(0);
          expect(console.error).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe('action is changeCount', () => {
      describe('no error', () => {
        it('sets state', () => {
          const { text, count, occurrences, error } = reducer(
            { ...initialState, text: 'every weekend' },
            {
              type: 'changeCount',
              payload: 2,
            }
          );
          expect(text).toEqual('every weekend');
          expect(count).toEqual(2);
          expect(error).toEqual(-1);
          expect(occurrences).toHaveLength(2);
          expectArrayOfDate(occurrences);
        });
      });
      describe('error', () => {
        it('sets state', () => {
          const { text, count, occurrences, error } = reducer(
            { ...initialState, text: 'error' },
            {
              type: 'changeCount',
              payload: 2,
            }
          );
          expect(text).toEqual('error');
          expect(count).toEqual(2);
          expect(error).toEqual(0);
          expect(occurrences).toHaveLength(0);
        });
      });
    });
    describe('action is other', () => {
      it('sets state', () => {
        const { text, count, occurrences, error } = reducer(initialState, {
          type: 'unknown' as any,
          payload: 'every weekend',
        });
        expect(text).toEqual('');
        expect(count).toEqual(1);
        expect(error).toEqual(-1);
        expect(occurrences).toHaveLength(0);
      });
    });
  });
});
