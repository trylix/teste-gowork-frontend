import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('É necessário cadastrar um nome'),
  is_company: Yup.string().required(),
  document: Yup.string().required('É necessário cadastrar um documento'),
  office_id: Yup.number().required('Selecione uma unidade.'),
  plan_id: Yup.number().required('Selecione um plano.'),
});
