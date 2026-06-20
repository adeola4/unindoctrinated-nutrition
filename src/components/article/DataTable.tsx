import { cn } from '@/lib/utils'

interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
  striped?: boolean
  hoverable?: boolean
}

export function DataTable({ headers, rows, caption, striped = true, hoverable = true }: DataTableProps) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-lg border border-lifespa-border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-lifespa-forest">
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 text-heading-sm font-medium text-white whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  'border-t border-lifespa-border transition-colors',
                  striped && i % 2 === 0 ? 'bg-lifespa-cream' : 'bg-white',
                  hoverable && 'hover:bg-lifespa-warm/50'
                )}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-body-sm text-lifespa-charcoal">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-lifespa-stone text-caption">{caption}</figcaption>
      )}
    </figure>
  )
}