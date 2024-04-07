type ClassContext = ClassDecoratorContext & {
  metadata: Record<PropertyKey, unknown>;
}

type MethodContext = ClassMethodDecoratorContext & {
  metadata: Record<PropertyKey, unknown>;
}

export function classDecorator(_target: any, context: ClassContext): void {
  context.metadata[context.name] = true;
  console.log(context)
}
