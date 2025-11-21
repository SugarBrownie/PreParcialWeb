import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TravelPlanDocument = HydratedDocument<TravelPlan>;

@Schema({ timestamps: true })
export class TravelPlan {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  countryCode: string;  
  
  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop()
  notes?: string;
}

export const TravelPlanSchema = SchemaFactory.createForClass(TravelPlan);
