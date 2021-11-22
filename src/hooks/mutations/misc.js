import {addBank, deleteBank, editBank} from 'api';
import {selectUserId} from 'selectors';
import {useMutation, useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

export const useAddBankMutation = () => {
  const queryClient = useQueryClient();
  const userId = useSelector(selectUserId);

  return useMutation(
    (bank) => {
      return addBank({...bank, id: userId});
    },
    {
      mutationKey: 'addBank',
      onSuccess: async () => {
        console.log("successful add bank")
        await queryClient.invalidateQueries('usersBanks');
      },
    },
  );
};

export const useDeleteBankMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => {
      return deleteBank(id);
    },
    {
      mutationKey: 'deleteBank',
      onSuccess: async () => {
        await queryClient.invalidateQueries('usersBanks');
      },
    },
  );
};

export const useEditBankMutation = () => {
  const queryClient = useQueryClient();
  const userId = useSelector(selectUserId);
  return useMutation(
    (bank) => {
      return editBank({...bank, id: userId});
    },
    {
      mutationKey: 'deleteBank',
      onSuccess: async () => {
        await queryClient.invalidateQueries('usersBanks');
      },
    },
  );
};
