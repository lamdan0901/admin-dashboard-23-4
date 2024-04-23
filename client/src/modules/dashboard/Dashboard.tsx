import { useCountStore } from '../../store/useCountStore'
import { QueryKey } from '../../constants'
import { useDocumentTitle } from '../../hooks'
import { getUserById } from '../../layouts/MainLayout/MainLayout.api'

const Dashboard = () => {
  useDocumentTitle('Dashboard')
  // const queryClient = useQueryClient()

  // const { mutate, isPending: mutationPending } = useMutation({
  //   mutationFn: async (text: string) => {
  //     console.log('called')
  //     await new Promise((resolve) => setTimeout(resolve, 1000))
  //     return text
  //   },
  //   onSuccess: () => {
  //     console.log('onSuccess')
  //     queryClient.invalidateQueries({ queryKey: [QueryKey.TODOS] })
  //   },
  //   onError: (error) => {
  //     console.log('Error in mutation', error.message)
  //   }
  // })

  return (
    <div>
      zzz{' '}
      {/* <button
        onClick={() => {
          mutate('test')
        }}
        disabled={mutationPending}
      >
        {mutationPending ? 'Adding Todo' : 'Add Todo'}
      </button> */}
    </div>
  )
}

export default Dashboard
