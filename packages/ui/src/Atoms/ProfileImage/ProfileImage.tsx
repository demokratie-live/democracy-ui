import React from 'react';
import { ImageSourcePropType } from 'react-native';
import * as S from './ProfileImage.styled';

export interface ProfileImageBaseProps extends S.ImageProps {
  source: ImageSourcePropType;
}

export const ProfileImageBase: React.FC<ProfileImageBaseProps> = ({
  ...props
}) => <S.Image {...props} />;

type Variants = 'oval' | 'round';

export interface ProfileImageProps {
  source: ImageSourcePropType;
  height: number;
  variant: Variants;
}

const getVariantImageProps = ({
  variant,
  height,
}: {
  variant: Variants;
  height: number;
}): Omit<ProfileImageBaseProps, 'source'> => {
  switch (variant) {
    case 'oval':
      return {
        height,
        width: height * 0.75,
        borderRadius: height * 0.375,
      };
    case 'round':
      return {
        height,
        width: height,
      };

    default:
      throw new Error(`Variant "${variant}" is not supported`);
  }
};

export const ProfileImage: React.FC<ProfileImageProps> = ({
  variant,
  ...props
}) => (
  <ProfileImageBase
    {...props}
    {...getVariantImageProps({ variant, ...props })}
  />
);
