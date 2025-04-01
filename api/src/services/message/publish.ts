import { connect } from '@nats-io/transport-node';

const { MESSAGING_HOST } = process.env;

export async function publish(subject: string, data: any) {
  try {   
    // const timestamp = new Date().toISOString();

    const nc = await connect({
      servers: MESSAGING_HOST
    });

    nc.publish(subject, `${data}`);

    // await nc.drain();  

    return { message: 'success' };
    
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}
