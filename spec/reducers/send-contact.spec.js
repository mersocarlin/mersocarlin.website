import { expect } from 'chai';
import reducer from '../../src/reducers/send-contact';
import {
  SEND_CONTACT_REQUEST,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_FAILURE,
  RESET_CONTACT_FORM,
} from '../../src/actions/contact';

describe('send-contact reducer', () => {
  it('should return the initial state', () => {
    const actualState = reducer(undefined, {});
    const expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: false,
    };

    expect(actualState).to.deep.equal(expectedState);
  });

  it('should handle SEND_CONTACT_FAILURE', () => {
    let actualState = reducer(undefined, { type: SEND_CONTACT_REQUEST });
    let expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: true,
    };

    expect(actualState).to.deep.equal(expectedState);

    actualState = reducer(expectedState, { type: SEND_CONTACT_FAILURE, error: {} });
    expectedState = {
      contactSent: false,
      error: {},
      isSubmiting: false,
    };

    expect(actualState).to.deep.equal(expectedState);
  });

  it('should handle SEND_CONTACT_SUCCESS', () => {
    let actualState = reducer(undefined, { type: SEND_CONTACT_REQUEST });
    let expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: true,
    };

    expect(actualState).to.deep.equal(expectedState);

    actualState = reducer(expectedState, { type: SEND_CONTACT_SUCCESS, data: true });
    expectedState = {
      contactSent: true,
      error: null,
      isSubmiting: false,
    };

    expect(actualState).to.deep.equal(expectedState);
  });

  it('should handle RESET_CONTACT_FORM', () => {
    let actualState = reducer(undefined, { type: RESET_CONTACT_FORM });
    let expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: false,
    };

    expect(actualState).to.deep.equal(expectedState);
  });
});