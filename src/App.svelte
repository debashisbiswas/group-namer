<script lang="ts">
  import { fade } from 'svelte/transition'
  import { capitalizeAll, randomValueFrom } from './lib/utils'
  let generatedName = ''

  type DatamuseEntry = {
    word: string
    score: number
  }
  type DatamuseResponse = DatamuseEntry[]

  const callDatamuseApi = async (path: string): Promise<DatamuseResponse> => {
    const res = await fetch('https://api.datamuse.com' + path)
    return res.json()
  }

  const generate = async () => {
    const [adjectives, descriptors, groupNames] = await Promise.all([
      callDatamuseApi('/words?ml=excellent'),
      callDatamuseApi(`/words?ml=software,data,visualization`),
      callDatamuseApi(`/words?ml=team,group,friends`),
    ])

    const adjective = randomValueFrom(adjectives)['word']
    const descriptor = randomValueFrom(descriptors)['word']
    const groupName = randomValueFrom(groupNames)['word']

    generatedName = capitalizeAll(`${adjective} ${descriptor} ${groupName}`)
  }
</script>

<main class="grid h-full place-content-center bg-slate-800 text-center text-gray-200">
  <div class="flex flex-col items-center space-y-8">
    <h1 class="text-5xl">Software Group Namer</h1>
    <button
      class="w-fit rounded-xl bg-sky-600 py-2 px-4 text-lg transition hover:bg-sky-500"
      on:click={generate}
    >
      Generate
    </button>
    {#key generatedName}
      <p class="h-10 text-2xl" in:fade>
        {generatedName}
      </p>
    {/key}
  </div>
</main>
