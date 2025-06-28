import Image from "next/image";
import { logo } from "~/constants/images";

export function AppLogo({ width, height }: { width: number; height: number }) {
    return <Image src={logo} alt="app logo" width={width} height={height} />;
}
