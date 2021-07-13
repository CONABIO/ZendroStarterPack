import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import dataModels from '@/build/models.preval';
import { authSelector } from '@/store/auth-slice';
import { ParsedDataModel } from '@/types/models';
import { ParsedPermissions } from '@/types/acl';
import { getResourcePermissions } from '@/utils/acl';

interface Model extends ParsedDataModel {
  permissions: ParsedPermissions;
}

type GetModel = (modelName: string) => Model;

export function useModel(): GetModel;
export function useModel(modelName: string): Model;
export function useModel(modelName?: string): Model | GetModel {
  const { user } = useSelector(authSelector);

  const getModel = useCallback(
    (modelName: string): Model => {
      const permissions = getResourcePermissions(modelName, user?.permissions);

      return {
        ...dataModels[modelName],
        permissions,
      };
    },
    [user?.permissions]
  );

  return modelName ? getModel(modelName) : getModel;
}

export default useModel;
