import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('É necessário cadastrar um nome'),
  city: Yup.string().required('É necessário cadastrar uma cidade'),
  state: Yup.string().required('É necessário cadastrar um estado'),
  file: Yup.object().required('É necessário adicionar uma foto'),
});
