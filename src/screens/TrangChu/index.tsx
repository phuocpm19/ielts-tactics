import Button from '@/components/Button';
import { EButtonType, EButtonVariant } from '@/components/Button/enums';
import Container from '@/components/Container';
import * as React from 'react';

export interface ITrangChuProps {}

export default function TrangChu(props: ITrangChuProps) {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Button variant={EButtonVariant.GRAY}>gray</Button>
      </div>
      <br />

      <div>
        <Button type={EButtonType.DEFAULT} variant={EButtonVariant.WHITE}>
          white
        </Button>
      </div>
      <br />

      <div>
        <Button variant={EButtonVariant.PURPLE}>purple</Button>
      </div>
      <br />

      <div>
        <Button variant={EButtonVariant.BLACK_WHITE}>black white</Button>
      </div>
      <br />

      <div>
        <Button variant={EButtonVariant.BLACK_YELLOW}>black yellow</Button>
      </div>
      <br />

      <div>
        <Button variant={EButtonVariant.YELLOW_BLACK}>yellow black</Button>
      </div>
      <br />

      <div>
        <Button variant={EButtonVariant.YELLOW_WHITE}>yellow white</Button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
