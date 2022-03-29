export default (
  id: string
): { 'data-testid': string } | { [attr: string]: string } => {
  return process.env.NODE_ENV === 'test'
    ? {
        'data-testid': id,
      }
    : {}
}
