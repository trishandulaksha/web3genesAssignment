export const userNameValdiate = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (!data.trim()) {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Name is required");
  } else {
    const usernameRegex = /^[a-zA-Z_]{3,100}$/;
    if (!usernameRegex.test(data)) {
      setErr(true);
      setCanSubmit(false);
      tempErrMsgArray.push(
        "User name can contain only letters and underscores "
      );
    } else {
      setErr(false);
      setCanSubmit(true);
    }
  }
  return setErrMsg(tempErrMsgArray);
};

export const userGenderValidate = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (data !== "Male" && data !== "Female") {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Please select a gender");
  } else {
    setErr(false);
    setCanSubmit(true);
  }
  return setErrMsg(tempErrMsgArray);
};

export const validateDOB = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (!data.trim()) {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Date of birth is required");
  } else {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(data)) {
      setErr(true);
      setCanSubmit(false);
      tempErrMsgArray.push(
        "Please enter a valid date of birth in YYYY-MM-DD format"
      );
    } else {
      setErr(false);
      setCanSubmit(true);
    }
  }
  return setErrMsg(tempErrMsgArray);
};

export const validateMobileNumber = (
  data: string,
  setErr: (err: boolean) => void,
  setErrMsg: (errMsg: string[]) => void,
  setCanSubmit: (canSubmit: boolean) => void
) => {
  const tempErrMsgArray = [];
  if (!data.trim()) {
    setErr(true);
    setCanSubmit(false);
    tempErrMsgArray.push("Mobile number is required and cannot contain spaces");
  } else {
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(data)) {
      setErr(true);
      setCanSubmit(false);
      tempErrMsgArray.push("Please enter a valid 10-digit mobile number");
    } else {
      setErr(false);
      setCanSubmit(true);
    }
  }
  return setErrMsg(tempErrMsgArray);
};
