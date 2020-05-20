import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('É necessário cadastrar um nome'),
  monthly_cost: Yup.string().required('É necessário cadastrar um valor mensal'),
});
