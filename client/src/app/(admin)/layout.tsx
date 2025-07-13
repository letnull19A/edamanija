import Container from '@/components/Container/layout'
import AdminHeader from './ui/AdminHeader'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminHeader />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
