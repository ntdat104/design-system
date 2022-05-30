import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  const { children, className, ...rest } = props;

  console.log(cx('wrapper'));
  console.log(styles.wrapper);

  return (
    <button className={cx('wrapper', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
