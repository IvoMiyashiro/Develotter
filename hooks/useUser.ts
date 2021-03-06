import { useEffect, useState } from 'react';
import { getUser } from 'services/user';


export const useUser = async (uid: string) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(uid)
      .then(resp => {
        if (!resp.ok) return;
        setUser(resp.user);

        return;
      })
      .catch(error => console.log(error));
  }, [uid, user]);
  return {
    user
  };
};
