const inputData = {
  name: '',
  surname: '',
  email: '',
};

export function emptyLocalStorage() {
  inputData.name = '';
  inputData.surname = '';
  inputData.email = '';
  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}

export function loadData(inputName, inputSurname, inputEmail) {
  if (!localStorage.inputData) {
    return;
  }
  const loadedData = JSON.parse(localStorage.inputData);
  inputName.value = loadedData.name;
  inputSurname.value = loadedData.surname;
  inputEmail.value = loadedData.email;
}

export function saveData(inputName, inputSurname, inputEmail) {
  inputData.name = inputName.value;
  inputData.surname = inputSurname.value;
  inputData.email = inputEmail.value;

  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}
