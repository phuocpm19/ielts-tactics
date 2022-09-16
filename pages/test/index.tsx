import * as React from "react";
import { Button } from "antd";
import styles from "./styles.module.scss";

export interface ITestPageProps {}

export default function TestPage(props: ITestPageProps) {
  return (
    <div>
      <p className="color-common">test page 1</p>
      <p className={styles.testColor}>test page 1</p>
      <div>
        <Button type="primary">Primary Button</Button>
      </div>
    </div>
  );
}
