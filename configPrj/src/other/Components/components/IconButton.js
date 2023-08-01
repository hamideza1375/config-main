import React from 'react';
import { A_icon, Column, Icon, M_icon, P, Press } from '../Html';
import { context } from '../../../context/_context';

export default function IconButton({ icon, micon, aicon, text, iconSize = 30, w = 80, h = 40, fs = 9 }) {
  const p = context();
  return (
    <Column bgcolor={'#eee'} w={90} pr={5} ml={5}>
      <Press w={w} bgcolor='#f22' br={5} fd='row' h={h} ai='center' onClick={() => { p.setimageUrl(''); p.toast.success('تصویر حذف شد', '✔'); }}>
        {icon && <Icon name={icon} size={iconSize} />}
        {micon && <M_icon name={micon} size={iconSize} />}
        {aicon && <A_icon name={aicon} size={iconSize} />}
        <P fs={fs}>{text}</P>
      </Press>
    </Column>
  );
}
