'use client';

import { useLinkAccount } from '@privy-io/react-auth';
import { Button } from 'antd';

export default function HomePage() {
  const { linkTwitter } = useLinkAccount({
    onSuccess: (user, linkMethod, linkedAccount) => {
      console.log('user', user);
      console.log('linkMethod', linkMethod);
      console.log('linkedAccount', linkedAccount);
    },
  });

  return (
    <Button
      type="primary"
      onClick={
        linkTwitter
      }
    >
      Bind Twitter
    </Button>
  );
};

