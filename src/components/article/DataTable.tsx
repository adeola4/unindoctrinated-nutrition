import { cn } from '@/lib/utils'

interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
}

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-xl border border-warm-border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-charcoal">
              {headers.map((header, i) => (
                <th key={i} className="px-5 py-3.5 font-body text-sm font-medium text-white whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={cn('border-t border-warm-border transition-colors', i % 2 === 0 ? 'bg-white' : 'bg-ivory')}>
                {row.map((cell, j) => (
                  <td key={j} className="px-5 py-3.5 font-body text-sm text-stone">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-body text-sm text-muted">{caption}</figcaption>
      )}
    </figure>
  )
}
