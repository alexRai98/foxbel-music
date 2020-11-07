/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React from 'react';
import * as FaIcons from 'react-icons/fa';

function User() {
  return (
    <div>
      <FaIcons.FaUser
        css={css`
          font-size: 14px;
          color: #e86060;
          margin-right: 12px;
        `}
      />
      <span
        css={css`
          font-size: 16px;
          line-height: 20px;
          color: #4f4f4f;
        `}
      >
        Francisco M.
      </span>
    </div>
  );
}

export default User;
