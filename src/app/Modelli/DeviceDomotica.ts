/**
 * Created by pino on 12/10/2016.
 */

interface IDeviceDomotica {
  defaultCanAddress;
  deviceFamily;
  deviceInitializer;
  deviceProtocol;
  deviceSubFamily;
  serialNumber;
  serialNumberString: string
  DO: IDigitalOutput[];
  Tipologia: string;
  imageSource: string;
}

interface IDigitalOutput {
  indice: number;
  value: boolean;
  viewState: string;
}
