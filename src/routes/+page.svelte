<script lang="ts">
  import type { Result } from "$lib/super-complex-algo";

  import { Button, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Input, Label } from 'flowbite-svelte';

  import calculate_result from '$lib/super-complex-algo';

  let results: Array<Result> = [];
  let gameCount: number = 1;

  const addResult = () => {
    results = [...results, ...calculate_result(gameCount)];
  }
</script>
<div class="flex items-center mt-8">
  <div class="mx-auto text-center">
    <Heading class="mb-4">TipGame</Heading>
    <div class="my-5">
      <Label for="gameCount" class="mb-2">Number of games</Label>
      <Input type="number" id="gameCount" bind:value={gameCount} />
    </div>
    <Button color="dark" autofocus class="dark:bg-gray-600" on:click={addResult}>Generate your results</Button>
    <div class="mt-8 mx-auto">

    <Table striped={true}>
      <TableHead>
        <TableHeadCell>Team 1</TableHeadCell>
        <TableHeadCell>Team 2</TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        {#each results as result}
          <TableBodyRow>
            <TableBodyCell class="text-center">{result.team1}</TableBodyCell>
            <TableBodyCell class="text-center">{result.team2}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>

    </div>
  </div>
</div>