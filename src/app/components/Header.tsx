'use client';

import { usePrivy } from '@privy-io/react-auth';
import { Button, Flex } from 'antd';

const Header = () => {
  const { user, login } = usePrivy();

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        margin: '0 auto 24px',
        padding: '0 24px',
        height: '72px',
        borderBottom: '1px solid #DDD',
      }}
    >
      <div className="logo">
        My Site Logo Placeholder
      </div>

      <Flex
        gap={24}
        align="center"
        className="action"
      >
        {
          (user && user.email)
            ? (<span>{user.email.address}</span>)
            : (
                <Button
                  type="text"
                  onClick={
                    login
                  }
                >
                  Login
                </Button>
              )
        }
      </Flex>
    </Flex>
  );
};

export default Header;
